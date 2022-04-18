import common from "../common/webhook.mjs";
import constants from "../../common/constants.mjs";

export default {
  ...common,
  key: "linear_app-issue-updated-instant",
  name: "Issue Updated (Instant)",
  description: "Emit new event when an issue is updated. See the docs [here](https://developers.linear.app/docs/graphql/webhooks)",
  type: "source",
  version: "0.0.1",
  dedupe: "unique",
  methods: {
    ...common.methods,
    getResourceTypes() {
      return [
        constants.RESOURCE_TYPE.ISSUE,
      ];
    },
    getWebhookLabel() {
      return "Issue created";
    },
    getActions() {
      return [
        constants.ACTION.UPDATE,
      ];
    },
    getMetadata(resource) {
      const {
        delivery,
        data,
        updatedAt,
      } = resource;
      return {
        id: delivery,
        summary: `Issue Updated: ${data.title}`,
        ts: Date.parse(updatedAt),
      };
    },
  },
};