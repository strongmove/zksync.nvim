local zksync = require("zksync").setup({
	notebook_dir = "/home/u/zk",
	webapp = {
		host = "http://localhost:3000",
	},
})
vim.print(vim.inspect(zksync.opts))
vim.print(vim.inspect(zksync))
