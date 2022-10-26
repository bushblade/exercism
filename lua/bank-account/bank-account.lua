local BankAccount = {}

function BankAccount.new(self, o)
	self.funds = 0
	o = o or {}
	setmetatable(o, self)
	self.__index = self
	return o
end

function BankAccount.deposit(self, amount)
	assert(not self.closed)
	assert(amount > 0)
	self.funds = self.funds + amount
end

function BankAccount.balance(self)
	return self.funds
end

function BankAccount.withdraw(self, amount)
	assert(not self.closed)
	assert(amount > 0 and amount <= self.funds)
	self.funds = self.funds - amount
end

function BankAccount.close(self)
	self.funds = 0
	self.closed = true
end

return BankAccount
