local function Matrix(s)
	local matrix = {}

	for strRow in string.gmatch(s, "[^\n]+") do
		local row = {}
		for num in string.gmatch(strRow, "%w+") do
			-- print(tonumber(num))
			table.insert(row, tonumber(num))
		end
		table.insert(matrix, row)
	end

	matrix.row = function(indx)
		return matrix[indx]
	end

	matrix.column = function(indx)
		local column = {}
		for _, row in ipairs(matrix) do
			table.insert(column, row[indx])
		end
		return column
	end

	return matrix
end

return Matrix
