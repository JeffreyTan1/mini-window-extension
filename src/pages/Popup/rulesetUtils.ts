// @ts-nocheck

export const addRuleset = () => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          responseHeaders: [
            {
              header: 'content-security-policy',
              operation: 'remove',
            },
            {
              header: 'x-frame-options',
              operation: 'remove',
            },
          ],
        },
        condition: {
          urlFilter: '*',
          resourceTypes: ['sub_frame'],
        },
      },
    ],
    removeRuleIds: [1],
  });
};
