import * as chai from "chai";
import { default as chaiHttp, request } from "chai-http";
import { expect } from "chai";
import server from "../server.js";
import mongoose from "mongoose";
import bddmongo from "../config/databaseTest.config.js";
import ShopCategory from "../app/models/shopcategory.model.js";
import ProductCategory from "../app/models/productcategory.model.js";
import Product from "../app/models/product.model.js";
import Shop from "../app/models/shop.model.js";

chai.use(chaiHttp);

describe("BDD connection", () => {
  describe("/GET home", () => {
    it("should get home message", (done) => {
      request
        .execute(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.message).to.be.eql("Bienvenue sur l'API de TyDrive");
          done();
        });
    });
  });

  describe("shopscategories", () => {
    before(function (done) {
      ShopCategory.deleteMany({}, function (err) {
        if (err) throw err;
        done();
      });
    });

    it("should get all shopscategories when no shopscategories are in database", (done) => {
      request
        .execute(server)
        .get("/api/categories")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });

    it("should register new shopscategories", (done) => {
      const testShopCategory = {
        name: "test",
        slug: "test",
        description: "test",
      };
      request
        .execute(server)
        .post("/categories")
        .send(testShopCategory)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.name).to.be.eql("test");
          expect(res.body.slug).to.be.eql("test");
          expect(res.body.description).to.be.eql("test");
          done();
        });
    });

    it("should get one shopscategories by slug", (done) => {
      request
        .execute(server)
        .get("/api/categories/test")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.name).to.be.eql("test");
          expect(res.body.slug).to.be.eql("test");
          expect(res.body.description).to.be.eql("test");
          done();
        });
    });
  });

  describe("productsCategories", () => {
    before(function (done) {
      ProductCategory.deleteMany({}, function (err) {
        if (err) throw err;
        done();
      });
    });

    it("should get all productsCategories when no productsCategories are in database", (done) => {
      request
        .execute(server)
        .get("/api/categoriesproduits")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });
  });

  describe("products", () => {
    before(function (done) {
      Product.deleteMany({}, function (err) {
        if (err) throw err;
        done();
      });
    });

    it("should get all products when no products are in database", (done) => {
      request
        .execute(server)
        .get("/api/produits")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });

    it("should get all products in a category", (done) => {
      request
        .execute(server)
        .get("/api/produits/test")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });

    it("should get all products in a sub-category", (done) => {
      request
        .execute(server)
        .get("/api/produits/test/test")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });

    it("should get one products by slug", (done) => {
      request
        .execute(server)
        .get("/api/produit/test")
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.be.eql(
            "test : ce produit n'existe pas dans la base de données.",
          );
          done();
        });
    });

    it("should get all products in a shop", (done) => {
      request
        .execute(server)
        .get("/api/commerces/test/test/produits")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });

    it("should get all products by search", (done) => {
      request
        .execute(server)
        .get("/api/recherche/test")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });
  });

  describe("shops", () => {
    before(function (done) {
      Shop.deleteMany({}, function (err) {
        if (err) throw err;
        done();
      });
    });

    it("should get all shops when no shops are in database", (done) => {
      request
        .execute(server)
        .get("/api/commerces")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });

    it("should get all shops in a category", (done) => {
      request
        .execute(server)
        .get("/api/commerces/test")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });

    it("should get one shop by slug in a category", (done) => {
      request
        .execute(server)
        .get("/api/commerces/test/test")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });
});

// Fermer proprement le serveur à la fin des tests
after(function (done) {
  server.close(() => {
    mongoose.connection.close(() => done());
  });
});
