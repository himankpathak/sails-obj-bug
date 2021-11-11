/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  testAction: async (req, res) => {
    const obj1 = await Test.findOne({
      id: 1,
    });

    console.log('Current value:', obj1);

    const a = await Test.update({
      id: obj1.id,
    }).set(obj1);

    console.log('After passing the object to update function');
    console.log('Modified value:', obj1);

    const obj2 = await Test.findOne({
      id: 2,
    });
    delete obj2.id;

    console.log('Current value:', obj2);
    await Test.create(obj2);

    console.log('After passing the object to create function');
    console.log('Modified value:', obj2);

    return res.send();
  },
};
