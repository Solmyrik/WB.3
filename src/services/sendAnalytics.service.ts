class sendAnalytics {
  async fetchAnalytics(data: object) {
    await fetch('/api/sendEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
}

export const analytics = new sendAnalytics();
