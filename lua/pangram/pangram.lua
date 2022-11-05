return function(s)
	s = s:lower()

	for letter in string.gmatch("abcdefghijklmnopqrstuvwxyz", ".") do
		if not string.find(s, letter) then
			return false
		end
	end

	return true
end
