const http = require ('http');
const fs = require ('fs');
const request = require('supertest');
const {createServer} = http;
const port = 5015;

const {server} = require('../index');

//mocking file read operation
jest.mock('fs'), () => ({
    readFile: jest.fn((path, callback)=> {
        if (path === './publics/htbm.pdf') {
            callback(null, Buffer.from('pdf'))
        } else {
            callback(new Error('File not found'));
        }
    })
});

describe('HTTP Server', () => {
    let app;

    beforeAll((done) => {
        app = createServer(server);
        app.listen(port, () => {
            console.log(`Test server listening on port ${port}`);
            done();
        });
    });

    afterAll((done) => {
        app.close(done);
    });

    it('responds with PDF file', (done) => {
        request(app)
        .get('/')
        .expect('Content-Type', 'application/pdf')
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            expect(res.body).toEqual(Buffer.from('pdf'));
            done();
        });
    });

    it('handles file read error', (done) => {
        //mock the fs.readFile function to simulate an error
        fs.readFile.mockImplementationOnce((path, callback)=> {
            callback(new Error('File read error'));
        });

        request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(500, done);
    });
});