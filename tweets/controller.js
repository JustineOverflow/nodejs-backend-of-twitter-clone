const Post = require('./model');

exports.get = (request, response) => {
    (async () => {
       const allPost = await Post.findAll();
       response.status(200).json(allPost);

    })()
};

exports.post = (request, response, next) => {
    const text = request.body.text;
    (async () => {
        const newPost = await Post.create({text});
        response.status(201).json(newPost);
    })();
};