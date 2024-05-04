export default {
  hello: 'XIn Chao',
  action: 'THAO TÁC',
  no_data_in_table: 'Không có dữ liệu trong bảng !',
  enter_all_field: 'Hãy nhập đầy đủ trường này',
  update_time: 'Thời gian cập nhật',
  menu: {
    dashboard: 'Dashboard',
    product_management: {
      title: 'Quản lý sản phẩm',
      child: {
        categories: 'Danh sách category',
        attributes: 'Danh sách thuộc tính',
        tags: 'Danh sách tags',
        products: 'Danh sách sản phẩm',
      },
    },
    order: 'Quản lý đơn hàng',
    warehouse: 'Quản lý kho hàng',
    store: 'Quản lý cửa hàng',
    promotion: 'Quản lý khuyến mãi',
    news: 'Quản lý bài viết',
  },
  categories: {
    name: 'Tên danh mục',
  },
  product: {
    product_id: 'Mã sản phẩm',
    product_name: 'Tên sản phẩm',
    product_quantity: 'Số lượng',
    product_price: 'Giá tiền',
  },
  order: {
    order_id: 'Mã đơn hàng',
    customer: 'Tên khách hàng',
    phone: 'Số điện thoại',
    location: 'Địa điểm',
    total_price: 'Tổng tiền',
    order_time: 'Thời gian order',
    purchase_time: 'Thời gian giao hàng cho khách',
    status: {
      title: 'Trạng thái đơn hàng',
      delivered: 'Đã giao hàng',
      shipped: 'Đã vận chuyển',
      cancelled: 'Đã hủy',
      pending: 'Chưa giải quyết',
    },
  },
  news: {
    news_title: 'Tiêu đề',
    news_category: 'Danh mục',
    author: 'Tác giả',
    published_time: 'Ngày phát hành',
    content: 'Nội dung',
    status: {
      title: 'Trạng thái',
    },
  },
  staff: {
    title: 'Nhân viên xử lý',
  },
  logout: 'Đăng xuất',
  login: {
    description:
      'Nâng tầm giấc ngủ - Nâng tầm cuộc sống',
    title: 'Đăng nhập',
    email: 'Nhập email',
    password: 'Nhập mật khẩu',
  },
  validate: {
    required: '{field} là bắt buộc',
    invalid: '{field} không hợp lệ',
    format_img: '{field} chấp nhận jpg, png, jpeg',
    min: 'Vui lòng nhập tối thiểu {number} ký tự',
    invalid_email: 'Địa chỉ email không hợp lệ',
    confirmed: 'Xác nhận mật khẩu không khớp với mật khẩu',
    invalid_password:
      'Mật khẩu chứa ít nhất 8 ký tự, một chữ in hoa, một số và một ký tự đặc biệt {character_special}',
  },
  message: {
    ERR_NETWORK: 'Kết nối không thành công',
    0: 'Không đúng tài khoản hoặc mật khẩu',
    1: '{field} thành công',
  },
};
