local M = {}
local opts = {}

local M = {
	opts = opts,
	setup = function(options)
		opts = vim.tbl_deep_extend("force", opts, options or {})
	end,
}
return M
