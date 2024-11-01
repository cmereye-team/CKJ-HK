

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  router.beforeEach((to, from, next) => {
    let _arr = ['404', 'test', '/news-tooth-wiki', '/news-information', '/article']
    if (!_arr.some(str => to.path?.indexOf(str) !== -1)) {
      let _tostr = to.path.slice(0, 3)
      if (!['/hk', '/cn'].includes(_tostr)) {
        let _fromstr = from.path.slice(0, 3)
        if (['/hk', '/cn'].includes(_fromstr)) {
          let _url = to.path
          let _url_new = _fromstr + _url
          next(_url_new)
        }
      }
    }
    if (from.path !== '/health-care-voucher') {
      setTimeout(() => {
        var container = document.getElementById('popup-alert-two')
        if (container) {
          container.style.display = 'flex'
        }
      }, 2000);
    }
    const excludedPaths = ['/health-care-voucher', "/health-care-voucher/"];
    if (!excludedPaths.includes(to.path)) {
      function popupAlertCreated() {
        var container = document.getElementById('popup-alert-two')
        // var  创建一个id healthCareVoucherPopTop
        var healthCareVoucherPopTop = document.createElement('div')
        const domWidth = window.innerWidth
        healthCareVoucherPopTop.innerHTML = ``
        if (domWidth < 768) {
          // 插入节点
          healthCareVoucherPopTop.innerHTML = `
                <div class="healthCareVoucherPop">
                  <div class="close">×</div>
                  <a href="/health-care-voucher">
                    <img src="https://static.cmereye.com/imgs/2024/10/4803cecce2a0156d.png"  alt="">
                  </a>
              </div>
              `
        }
        if (container) {
          // container 设置为空 
          container.innerHTML = ''
          container.appendChild(healthCareVoucherPopTop)
        }
        // 绑定事件healthCareVoucherPop
        const close = document.querySelector('.close')
        if (close) {
          close.addEventListener('click', function (e) {
            if (container) {
              container.style.display = 'none'
            }
          })
        }
      }
      setTimeout(() => {
        popupAlertCreated()
      }, 500);
    }
    if (typeof to.name === 'string' && ['slug'].includes(to.name)) {
      next('/404')
    }
    next()
  })
})