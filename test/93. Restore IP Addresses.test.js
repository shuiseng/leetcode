import ip from '../src/code/93. Restore IP Addresses'

test('ip:1', () => {
	expect(ip('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
})

test('ip:2', () => {
	expect(ip('010010')).toEqual(["0.10.0.10", "0.100.1.0"])
})


["0.1.0.010","0.1.00.10","0.1.001.0","0.10.0.10","0.10.01.0","0.100.1.0","01.0.0.10","01.0.01.0","01.00.1.0","010.0.1.0"]