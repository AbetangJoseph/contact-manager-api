import request from 'supertest';
import app from '../src/app';

describe('API Routes', () => {
  Date.now = jest.fn(() => 1563262251847);
  it('adds two contacts and returns 201 status code if successful', () => {
    const contact_1 = {
      firstname: 'Joseph',
      lastname: 'Abetang',
      mobile: '+23422773761',
      address: 'Decagon, Nigeria',
      created: Date.now(),
    };

    const contact_2 = {
      firstname: 'John',
      lastname: 'Doe',
      mobile: '+23422773761',
      address: 'Chelsea, UK',
      created: Date.now(),
    };

    request(app)
      .post('/api/contacts')
      .send({ firstname: 'Mike' })
      .then(res => {
        expect(res.status).toBe(400);
      });

    request(app)
      .post('/api/contacts')
      .send(contact_1)
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.message).toBe('contact created successfully');
      });

    request(app)
      .post('/api/contacts')
      .send(contact_2)
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.message).toMatch('contact created successfully');
      });
  });

  it('gets all contacts from database', () => {
    return request(app)
      .get('/api/contacts')
      .set('Accept', 'application/json')
      .expect(200);
  });

  it('gets a contact from database', () => {
    return request(app)
      .get('/api/contacts/1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect({
        user: {
          id: 1,
          firstname: 'Joseph',
          lastname: 'Abetang',
          mobile: '+23422773761',
          address: 'Decagon, Nigeria',
          created: Date.now(),
          isBlocked: false,
        },
      });
  });

  it("returns 404 when contact doesn't exist", () => {
    return request(app)
      .get('/api/contacts/100')
      .set('Accept', 'application/json')
      .expect(404);
  });

  it('returns 400 if invalid params is passed to contact to block', () => {
    return request(app)
      .put('/api/contacts/hahdje/block')
      .set('Accept', 'application/json')
      .expect(res => {
        expect(res.status).toBe(400);
        expect(res.body.message).toMatch('bad request');
      });
  });

  it('blocks a specific contact', () => {
    return request(app)
      .put('/api/contacts/2/block')
      .set('Accept', 'application/json')
      .expect(res => {
        expect(res.status).toBe(200);
        expect(res.body.message).toMatch('contact has been blocked');
      });
  });

  it('returns an array of object containing blocked contacts', () => {
    return request(app)
      .get('/api/contacts/blocked')
      .set('Accept', 'application/json')
      .expect(200)
      .expect({
        blockedContacts: [
          {
            firstname: 'John',
            lastname: 'Doe',
            mobile: '+23422773761',
            address: 'Chelsea, UK',
            id: 2,
            created: Date.now(),
            isBlocked: true,
          },
        ],
      });
  });

  it('unblocks a specific contact', () => {
    return request(app)
      .put('/api/contacts/2/unblock')
      .set('Accept', 'application/json')
      .expect(res => {
        expect(res.status).toBe(200);
        expect(res.body.message).toMatch('contact has been unblocked');
      });
  });

  it('returns 404 when trying to unblocks a specific contact with an invalid id', () => {
    return request(app)
      .put('/api/contacts/hello/unblock')
      .set('Accept', 'application/json')
      .expect(res => {
        expect(res.status).toBe(400);
        expect(res.body.error).toMatch('bad request');
      });
  });

  it('update a specific contact', () => {
    return request(app)
      .put('/api/contacts/2/edit')
      .send({ firstname: 'Mark Cuban' })
      .set('Accept', 'application/json')
      .expect(res => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBeTruthy();
      });
  });

  it('returns error if user to update does not exist', () => {
    return request(app)
      .put('/api/contacts/100/edit')
      .send({ firstname: 'Mark Cuban' })
      .set('Accept', 'application/json')
      .expect(res => {
        expect(res.status).toBe(400);
        expect(res.body.error).toMatch('no such contact');
      });
  });

  it('returns error if user violates input validation', () => {
    const contact = {
      mobile: '+133459540495040',
    };
    return request(app)
      .put('/api/contacts/2/edit')
      .send(contact)
      .set('Accept', 'application/json')
      .expect(res => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBeTruthy();
      });
  });

  it('deletes a specific contact', () => {
    return request(app)
      .delete('/api/contacts/1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect({
        data: {
          firstname: 'Joseph',
          lastname: 'Abetang',
          mobile: '+23422773761',
          address: 'Decagon, Nigeria',
          id: 1,
          created: 1563262251847,
          isBlocked: false,
        },
      });
  });

  it('it throws a message on attempt to delete a non-existing contact', () => {
    return request(app)
      .delete('/api/contacts/1')
      .set('Accept', 'application/json')
      .expect(res => {
        expect(res.status).toBe(404);
        expect(res.body.message).toMatch('no such contact');
      });
  });
});
