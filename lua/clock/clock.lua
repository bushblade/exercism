local Clock = {
	minutes = 0,
}

function Clock.at(hours, minutes)
	return Clock:new(hours, minutes)
end

function Clock:new(hours, minutes)
	minutes = minutes or 0
	local clock = {
		minutes = (hours * 60 + minutes) % (24 * 60),
	}
	self.__index = self
	return setmetatable(clock, self)
end

function Clock:minus(minutes)
	self.minutes = self.minutes - minutes
	return self
end

function Clock:plus(minutes)
	self.minutes = self.minutes + minutes
	return self
end

function Clock:equals(other)
	return self.minutes == other.minutes
end

function Clock.__tostring(self)
	local hours = math.floor(self.minutes / 60) % 24
	local minutes = self.minutes % 60
	return string.format("%02d:%02d", hours, minutes)
end

return Clock
