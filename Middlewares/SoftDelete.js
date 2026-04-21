const schema = new mongoose.Schema({
    name: String,
    deleted: { type: Boolean, default: false }
});

// Override remove → soft delete
schema.methods.softDelete = function () {
    this.deleted = true;
    return this.save();
};

// Automatically filter deleted records
schema.pre(/^find/, function (next) {
    this.where({ deleted: false });
    next();
});

const Model = mongoose.model('Item', schema);

// Usage:
// await item.softDelete(); instead of deleteOne()