import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("Index Page", () => {
	it("should say be titled Javascript Developer Platform", (done) => {
		const index = fs.readFileSync("./src/index.html", "utf-8");
		// create a virtual dom with jsdom
		jsdom.env(index, (err, window) => {
			const h1 = window.document.getElementsByTagName("h1")[0];
			expect(h1.innerHTML).to.equal("Javascript Developer Platform");
			done();
			window.close;
		});
	});
});

