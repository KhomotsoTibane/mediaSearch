//test to see if the get route returns an object
let chai = require('chai')
let chaiHttp= require("chai-http")
let server = require("../server")

chai.should();
chai.use(chaiHttp);


describe('Status and content', function () {
         
    describe('GET api/search', function () {
                it('should get a object', function (done) {
                    chai.request(server)
                    .get("/api/search")
                    .end((err , response)=>{
                        response.should.have.status(200);
                        response.body.should.be.a('object')     
                        done();
                    })  
                });

                it('fail to get object', function (done) {
                    chai.request(server)
                    .get("/api/searchh")
                    .end((err , response)=>{
                        response.should.have.status(404);   
                        done();
                    })  
                });
    });

            
});