def on_forever():
    basic.show_number(pins.digital_read_pin(DigitalPin.P1))
    pins.set_pull(DigitalPin.P0, PinPullMode.PULL_UP)
basic.forever(on_forever)
