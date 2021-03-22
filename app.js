const mongoose =require("mongoose");


mongoose.connect("mongodb://localhost:27017/rajdb",{
 useNewUrlParser:true,
 useUnifiedTopology:true,
 useFindAndModify:true,
 useCreateIndex:true

}).then(()=> console.log("connection sucessful...."))
.catch((err)=> console.log(err));



const playListSchema= new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	ctype:String,
	videos:Number,
	author:String,
	active:Boolean,
	date:{
		type:Date,
		default:Date.now
	}
});

//collection creation

const Playlist= new mongoose.model("Playlist",playListSchema);

const createDocument = async()=>{
	try{
const reactPlaylist= new Playlist({
	name:"java",
	ctype:"back End",
	videos:66,
	author:"rj",
	active:true,


});
const result = await reactPlaylist.save();
console.log(result);
}catch(err){
	console.log(err);
}
}
createDocument();


