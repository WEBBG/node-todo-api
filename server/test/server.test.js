const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo test';

        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.findOne({ text: text }).then((todo) => {
                    console.log(todo.text);
                    expect(todo.text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todo) => {
                    expect(todo.text).toBe(undefined);
                    done();
                }).catch((e) => done(e));
            });
    });
});