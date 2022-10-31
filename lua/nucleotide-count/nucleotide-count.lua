local DNA = {}

function DNA:new(input)
	local dna = {}
	setmetatable(dna, self)
	self.__index = self
	dna.nucleotideCounts = { A = 0, T = 0, C = 0, G = 0 }
	for char in string.gmatch(input, ".") do
		assert(dna.nucleotideCounts[char], "Invalid Sequence")
		dna.nucleotideCounts[char] = dna.nucleotideCounts[char] + 1
	end
	return dna
end

function DNA:count(input)
	return self.nucleotideCounts[input] or error("Invalid Nucleotide")
end

return DNA
