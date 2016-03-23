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
      Object.keys(res.data).forEach(function (key) {
        res.data[key].forEach(function (key) {
          console.log(key);
        });
      });
      /*for (let key in res.data) {
       this.assetObj[key] = res.data[key];
       }*/
    });
  }

  loadImages() {
    const loader = new PxLoader();
    let pxImage = [];
    loader.addCompletionListener((e)=> {
      //console.log(pxImage[0].img);
      /*  for (let i in this.assetObj[key]) {
       const imgUrl = this.assetObj[key][i];
       //const pxImage = new PxLoaderImage(this.dropboxBaseUrl + '/static/storage/' + imgUrl);
       pxImage[i] = new PxLoaderImage('/static/storage/' + imgUrl);
       loader.add(pxImage[i]);
       }*/
      //$('.preloaderContent').remove();
      //defer.resolve();
    });
    loader.start();

  }

  get getAssets() {
    return this.assetObj;
  }
}

export default AssetService;