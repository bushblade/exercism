local function word_count(s)
	local count = {}
	for word in string.gmatch(s:lower():gsub(",", " "):gsub("[:!&@$%%%.^&]", ""), "%S+") do
		if word:sub(1, 1) == "'" then
			word = word:sub(2, -2)
		end
		if not count[word] then
			count[word] = 1
		else
			count[word] = count[word] + 1
		end
	end
	return count
end

return {
	word_count = word_count,
}
