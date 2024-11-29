const { oldPassword, newPassword, confPassword } = req.body;

if (user.password == oldPassword) {
    if (oldPassword != newPassword) {
        if (newPassword == confPassword) {
            user.password = newPassword;
            user.save();
            return res.redirect('/user/logout');
        }
        else {
            console.log("New Password and Confirm Password not matching.Please try again.");
        }
    }
    else {
        console.log("New Password and Old Password are same. Please try again.");
    }
}
else {
    console.log("Wrong Password.");
}

return res.redirect(req.get('Referrer') || '/');