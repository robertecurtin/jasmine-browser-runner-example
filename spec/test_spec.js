describe('it should go in the browser', () => {
  it('should do a thing', () => {
    const actual = window.confirm('pls press okay')
    expect(actual).toBeTruthy();
  })

  it('should do another thing', () => {
    window.alert("sometext");
    expect(true).toBeTruthy();
  })
})
