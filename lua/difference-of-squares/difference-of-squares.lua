local function square_of_sum(n)
	local count = 0
	for i = 1, n do
		count = count + i
	end
	return count * count
end

local function sum_of_squares(n)
	local count = 0
	for i = 1, n do
		count = count + i * i
	end
	return count
end

local function difference_of_squares(n)
	return square_of_sum(n) - sum_of_squares(n)
end

return {
	square_of_sum = square_of_sum,
	sum_of_squares = sum_of_squares,
	difference_of_squares = difference_of_squares,
}
