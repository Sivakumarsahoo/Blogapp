const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 102,
      
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2002,
      
    },
    author:{
        type: String,
      required: true,
      
    },

   
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);