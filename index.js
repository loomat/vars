module.exports = {
    Instruction: {
        AddItem: 'add_item',
        Query: 'query',
        RemoveItem: 'remove_item',
        RemoveItems: 'remove_items',
    },

    Error:{
        ok: 0,
        unset: -1,
        unreachable: -2,
        // provider
        provider_unset: 10,
        // instruction
        instruction_unknown: 20
    },

    derive_path:{
        keccak: "m/44'/60'/1'/0/0"
    }

}