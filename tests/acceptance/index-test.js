import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import backstop from "ember-backstop/test-support/backstop";

module("Acceptance | index", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /index", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");

    await backstop(assert);
  });
});
