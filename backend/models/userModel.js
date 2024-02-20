import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//  this will run before saved in db
userSchema.pre('save', async function (next) {
    //  if not dealing with password - go to the next middleware
    if (!this.isModified('password')) {
        next();
    }
    //  if dealing with password:
    //  generate salt
    // set pass to hashed pass
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    //  so the password is changes for hashed password before it is saved in db
});
const User = mongoose.model('User', userSchema);

export default User;
