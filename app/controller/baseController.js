"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class BaseController extends egg_1.Controller {
    /**
     * 成功
     * @param data 响应数据
     */
    success(data) {
        this.ctx.status = 200;
        this.ctx.body = {
            success: true,
            ...data,
        };
        return;
    }
    /**
     * 失败
     * @param data 响应数据
     */
    fail(data) {
        this.ctx.status = 500;
        this.ctx.body = {
            success: false,
            ...data,
        };
        return;
    }
}
exports.default = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFpQztBQUNqQyxNQUFxQixjQUFlLFNBQVEsZ0JBQVU7SUFDcEQ7OztPQUdHO0lBQ0gsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDZCxPQUFPLEVBQUUsSUFBSTtZQUNiLEdBQUcsSUFBSTtTQUNSLENBQUM7UUFDRixPQUFPO0lBQ1QsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksQ0FBQyxJQUFJO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ2QsT0FBTyxFQUFFLEtBQUs7WUFDZCxHQUFHLElBQUk7U0FDUixDQUFDO1FBQ0YsT0FBTztJQUNULENBQUM7Q0FDRjtBQTFCRCxpQ0EwQkMifQ==