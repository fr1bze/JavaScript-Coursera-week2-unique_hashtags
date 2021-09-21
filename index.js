/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	var result = [];
	if (hashtags.length == 0)
	{
		return "";
	}
	else
	{
		for (var i = 0; i < hashtags.length; i++)
		{
			var tmp = hashtags[i].toLowerCase();
			for (var j = i + 1; j < hashtags.length; j++)
			{
				if (tmp === hashtags[j].toLowerCase())	
				{								
					hashtags[j] = "*";				 
				}
			}
				if (hashtags[i] !== "*")
				{
				result.push(tmp);	
				}
		}
	}
	return result.join(', ');
}

