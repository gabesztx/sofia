class AssetService {
  /**
   * @param $http
   */
  constructor($http) {
    this.http = $http;
    this.assetObj = {};
    this.img = [];
    this.dropboxBaseUrl = '/u/27048617/sofia';
  }

  getAssetsData(defer) {
    this.http({
      method: 'GET',
      //url:  this.dropboxBaseUrl + '/static/storage/storage.json'
      url: '/static/storage/storage.json'
    }).then((res)=> {
      Object.keys(res.data).forEach((key)=> {
        this.assetObj[key] = res.data[key];
      });
      this.loadImages(defer);
    });
  }

  loadImages(defer) {
    const loader = new PxLoader();
    let pxImage = [];
    for (let i in this.assetObj['welcome']) {
      const imgUrl = '/static/storage/' + this.assetObj.welcome[i];
      pxImage[i] = new PxLoaderImage(imgUrl);
      loader.add(pxImage[i]);
    }
    loader.addCompletionListener((e)=> {
      if (!e.error) {
        $('.preloaderContent').remove();
        defer.resolve();
      }
    });
    loader.start();
  }

  get getAssets() {
    return this.assetObj;
  }
}

export default AssetService;