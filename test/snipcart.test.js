// /* eslint-disable no-undef */

// require('should');

// const { cloneDeep } = require('@atelierfabien/next-foundation/server');

// const axios = require('axios');

// const completedPayload = require('./fixtures/snipcart.completed.json');

// const webhookUrl = 'http://localhost:3000/api/snipcart';

// function buildPayload(basePayload, id, quantity = 1) {
//   const clone = cloneDeep(basePayload);
//   clone.content.items[0].id = id;
//   clone.content.items[0].uniqueId = id;
//   clone.content.items[0].quantity = quantity;
//   return clone;
// }

// describe('Snipcart', () => {
//   describe('With Variant', () => {
//     const targetId = 'b7f6b58c-5d7e-48ed-bf36-bd490feee42c';

//     let initialQuantity = 0;

//     it('should fetch initial inventory', async () => {
//       const response = await axios.get(`${webhookUrl}/products/${targetId}`);
//       initialQuantity = response.data.quantity;
//       response.data.quantity.should.be.above(0);
//     });

//     it('should update the inventory when order is completed', async () => {
//       const payload = buildPayload(completedPayload, targetId, 1);
//       const response = await axios.post(webhookUrl, payload);
//       response.data.ok.should.be.true();
//       response.data.ids.should.not.be.empty();
//     });

//     it('should fetch current inventory', async () => {
//       const response = await axios.get(`${webhookUrl}/products/${targetId}`);
//       response.data.quantity.should.equal(initialQuantity - 1);
//     });
//   });
// });
