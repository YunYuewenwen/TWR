JEIEvents.hideFluids((event) => {
    let fluidsToHide = [
        "immersiveengineering:phenolic_resin"
    ]
    fluidsToHide.forEach((disabledFluid) => {
        if (!Fluid.of(disabledFluid).isEmpty()) {
            event.hide(disabledFluid);
        }
    })
})