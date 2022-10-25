local function is_isogram(s)
	local map = {}
	for char in string.lower(s):gmatch("[a-z]") do
		if map[char] ~= nil then
			return false
		end
		map[char] = true
	end
	return true
end

return is_isogram
