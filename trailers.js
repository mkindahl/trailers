function parse(message) {
    const paragraphs = message.split("\n\n");
    const lines = paragraphs[paragraphs.length - 1]
	  .replace(/\n[ \t]+/g, ' ')
	  .split("\n");
	
    var trailers = {};
    for (var i = 0 ; i < lines.length ; i++) {
	const p = lines[i].indexOf(":");
	const key = lines[i].substr(0,p).trim().toLowerCase();
	trailers[key] = lines[i].substr(p+1, lines[i].length).trim();
    }
    return trailers;
};

module.exports.parse = parse;

