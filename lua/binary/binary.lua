local function to_decimal(input)
	local has_letters = string.match(input, "%a+")
	if has_letters then
		return 0
	end
	local bit = 1
	local decimal = 0
	for char in string.gmatch(input:reverse(), ".") do
		if char == "1" then
			decimal = decimal + bit
		end
		bit = bit * 2
	end
	return decimal
end

return {
	to_decimal = to_decimal,
}
