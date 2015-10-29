var model_object = require ('Model');

function toggle_flag ()
{
	console.log ("controller > toggle_flag")
	model_object.is_flag.value = !model_object.is_flag.value;
}

module.exports =
{
	toggle_flag: toggle_flag
};