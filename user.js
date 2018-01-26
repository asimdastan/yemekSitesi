//user tablosu
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

//şema oluşturup kayıt altında tutmak istediğimiz nesnenin yapısını belirtiyoruz.
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    yemekler: [{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Yemek"
        },
        adi			: String,
        resim		: String,
        aciklama	: String,
        olusturan 	: 
            {
                id:
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                username : String
            },
    }]
});
//passportLocalMongoose ile gelen metotları şemamıza enjekte ediyoruz sonradan kullanabilmek için
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);