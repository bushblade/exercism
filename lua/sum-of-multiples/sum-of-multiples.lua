local function sum_of_multiples(numbers)
	return {
		to = function(lastNum)
			local sum = 0
			for i = 1, lastNum - 1 do
				for _, num in pairs(numbers) do
					if i >= num and i % num == 0 then
						sum = sum + i
						break
					end
				end
			end
			return sum
		end,
	}
end

return sum_of_multiples
