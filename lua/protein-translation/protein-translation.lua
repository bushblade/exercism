local codons = {
	AUG = "Methionine",
	UUU = "Phenylalanine",
	UUC = "Phenylalanine",
	UUA = "Leucine",
	UUG = "Leucine",
	UCU = "Serine",
	UCC = "Serine",
	UCA = "Serine",
	UCG = "Serine",
	UAU = "Tyrosine",
	UAC = "Tyrosine",
	UGU = "Cysteine",
	UGC = "Cysteine",
	UGG = "Tryptophan",
	UAA = "STOP",
	UAG = "STOP",
	UGA = "STOP",
}
local function translate_codon(codon)
	return codons[codon] or error()
end

local function translate_rna_strand(rna_strand)
	local startIndx = 1
	local translation = {}
	while startIndx < #rna_strand do
		local codon = string.sub(rna_strand, startIndx, startIndx + 2)
		local protein = codons[codon]
		assert(protein)
		if protein == "STOP" then
			return translation
		end
		table.insert(translation, protein)
		startIndx = startIndx + 3
	end
	return translation
end

return {
	codon = translate_codon,
	rna_strand = translate_rna_strand,
}
