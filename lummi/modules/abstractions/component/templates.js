'use strict'

let Template = `<template>
	<div id="{{component_name}}">

	</div>
</template>

`

let Script = `<script>
	export default {
		name: '{{component_name}}'
	}
</script>

`

let Style = `<style{{component_pp}}>
	#{{component_name}} {

	}
</style>`
module.exports = { Style, Script, Template }
