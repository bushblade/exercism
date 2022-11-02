local PhoneNumber = {}

function PhoneNumber:new(str)
	local o = {}
	setmetatable(o, self)
	self.__index = self
	o.number = string.gsub(str, "%D+", "")
	if o.number:sub(1, 1) == "1" then
		o.number = o.number:sub(2)
	end
	if #o.number ~= 10 then
		o.number = string.rep("0", 10)
	end
	return o
end

function PhoneNumber:areaCode()
	return self.number:sub(1, 3)
end

function PhoneNumber:__tostring()
	return "("
		.. string.sub(self.number, 1, 3)
		.. ")"
		.. " "
		.. string.sub(self.number, 4, 6)
		.. "-"
		.. string.sub(self.number, 7)
end

return PhoneNumber
