const getPokemon = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
	const data = await res.json();
	return data;
};

module.exports = (plugin) => {
	plugin.setOptions({ dev: true });
	plugin.registerFunction(
		"Doit",
		async () => {
			const res = await getPokemon();
			const data = JSON.stringify(res);
			const str = `echo '${data}'`;
			plugin.nvim.command(str);
			plugin.nvim.setLine(data);
			// plugin.nvim.setLine(JSON.stringify(res));
		},
		{ sync: false },
	);
	// plugin.registerAutocmd("BufWritePre", onBufWrite, { pattern: "*" });
};
