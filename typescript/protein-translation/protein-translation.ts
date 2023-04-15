function codons(rnaArr: string[], output: string[] = []): string[] {
  const [first, second, third, ...rest] = rnaArr
  const chunked = [...output, first + second + third]
  return rest.length > 0 ? codons(rest, chunked) : chunked
}

const proteinMap: Record<string, string> = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
}

export function translate(rna: string): string[] {
  const proteins = codons([...rna]).map((codon) => proteinMap[codon])
  const output = []
  for (const protein of proteins) {
    if (!protein) throw new Error('Invalid codon')
    if (protein === 'STOP') return output
    output.push(protein)
  }
  return output
}
