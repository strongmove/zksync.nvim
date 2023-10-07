local M = {}
_ZK_OPTS = {}

local M = {
	opts = _ZK_OPTIONS,
	setup = function(options)
		M.opts = vim.tbl_deep_extend("force", M.opts, options or {})
		return M
	end,
}
return M
