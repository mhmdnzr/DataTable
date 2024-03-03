

document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('ordersTable');
    // const tbody = table.querySelector('tbody');
    const paginationContainer = document.getElementById('pagination');

    const apiUrl = 'http://localhost:58863/api/PurchaseOrder/GetOrders';

    const itemsPerPage = 4; // Adjust as needed
    let currentPage = 1;

    function fetchData(pageNumber) {
        const url = `${apiUrl}?NeedTotalCount=true&PageNumber=${pageNumber}&PageSize=${itemsPerPage}`;

        // Fetch data from the API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var data={
                    "queryResult": [
                        {
                            "id": 23,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "",
                            "factorId": null,
                            "orderDate": "1402-11-14",
                            "orderId": "12366",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "48971956",
                            "totalAmount": "3507476",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "42479432",
                            "sentDate": null,
                            "collectionTypeString": "رسید",
                            "orderStatusString": "در حال انجام"
                        },
                        {
                            "id": 22,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "1402-11-14",
                            "factorId": "7",
                            "orderDate": "1402-11-13",
                            "orderId": "12365",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "65454545546",
                            "totalAmount": "3507476",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "42479432",
                            "sentDate": "2024-02-03T00:00:00",
                            "collectionTypeString": "نقد",
                            "orderStatusString": "10"
                        },
                        {
                            "id": 21,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "",
                            "factorId": null,
                            "orderDate": "1402-11-12",
                            "orderId": "12364",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "656485236",
                            "totalAmount": "3507476",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "42479432",
                            "sentDate": null,
                            "collectionTypeString": "چک",
                            "orderStatusString": "-1"
                        },
                        {
                            "id": 20,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "",
                            "factorId": null,
                            "orderDate": "1402-11-09",
                            "orderId": "12363",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "78452689",
                            "totalAmount": "3507476",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "42479432",
                            "sentDate": null,
                            "collectionTypeString": "نقد",
                            "orderStatusString": "در حال انجام"
                        },
                        {
                            "id": 19,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "1402-11-07",
                            "factorId": "6",
                            "orderDate": "1402-11-06",
                            "orderId": "12362",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "963852126",
                            "totalAmount": "3507476",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "42479432",
                            "sentDate": "2024-01-29T00:00:00",
                            "collectionTypeString": "نقد",
                            "orderStatusString": "9"
                        },
                        {
                            "id": 18,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "",
                            "factorId": null,
                            "orderDate": "1402-11-05",
                            "orderId": "12361",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "7894561",
                            "totalAmount": "3507476",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "42479432",
                            "sentDate": null,
                            "collectionTypeString": "نقد",
                            "orderStatusString": "در حال انجام"
                        },
                        {
                            "id": 17,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "",
                            "factorId": null,
                            "orderDate": "1402-11-05",
                            "orderId": "12360",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "1593574682",
                            "totalAmount": "3507476",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "42479432",
                            "sentDate": null,
                            "collectionTypeString": "نقد",
                            "orderStatusString": "در حال انجام"
                        },
                        {
                            "id": 16,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "1402-11-04",
                            "factorId": "5",
                            "orderDate": "1402-11-04",
                            "orderId": "12359",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "516515",
                            "totalAmount": "0",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "654651",
                            "sentDate": "2024-01-26T00:00:00",
                            "collectionTypeString": "چک",
                            "orderStatusString": "8"
                        },
                        {
                            "id": 15,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "",
                            "factorId": null,
                            "orderDate": "1402-11-02",
                            "orderId": "12358",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "6541654",
                            "totalAmount": "0",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "0",
                            "sentDate": null,
                            "collectionTypeString": "نقد",
                            "orderStatusString": "در حال انجام"
                        },
                        {
                            "id": 14,
                            "companyName": "شرکت پخش پگاه",
                            "saleBranchName": "تهران غرب",
                            "factorDate": "",
                            "factorId": null,
                            "orderDate": "1402-11-01",
                            "orderId": "12357",
                            "addedValue": null,
                            "categoryName": "خرده",
                            "activityName": "سوپر مارکت",
                            "shopName": null,
                            "grossAmount": "8978865",
                            "totalAmount": "0",
                            "discount": "0",
                            "customerDegree": "26",
                            "customerName": "محمد رضا ",
                            "customerCode": "1234",
                            "sum": "0",
                            "sentDate": null,
                            "collectionTypeString": "نقد",
                            "orderStatusString": "در حال انجام"
                        }
                    ],
                    "pageNumber": 1,
                    "pageSize": 10,
                    "totalCount": 0
                }
                const orders = data.queryResult;

                // Clear existing table rows
                table.innerHTML = '';

                // Populate table rows with data
                orders.forEach(order => {
                    
                    const row = document.createElement('section');


                    row.classList.add('w-full')
                    row.classList.add('flex')
                    row.classList.add('flex-wrap')
                    // Populate row cells with order details
                    row.innerHTML = `
                   
                    <div class="w-full border flex flex-wrap official-class rounded-[5px] bg-white transition ease-in-out">
                    <div class="w-1/12 p-2 flex row gap-5">
                        <input type="checkbox" id=${"checkbox1-"+order.Id} class="accordion-checkbox hidden"
                               onclick=${rotateButton(this)}>
                        <label for=${"checkbox1-"+order.Id} class="accordion btn btn-sm btn-ghost">
                            <i class="fa-solid fa-chevron-down"></i>
                        </label>
                   
                   
                        <div class="dropdown dropdown-bottom">
                            <div tabindex="0" role="button" class="btn btn-sm btn-ghost">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                            <ul tabindex="0"
                                class="dropdown-content z-[1111] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li>
                                    <a>Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-6/12 p-2 flex justify-end">
                        <p class="text-right rtl">
                            <span>نام شعبه:</span>
                            <span>${order.saleBranchName}</span>
                        </p>
                    </div>
                    <div class="w-3/12 p-2 flex justify-end">
                        <p class="text-right rtl">
                            <span>نام شرکت:</span>
                            <span>${order.companyName}</span>
                        </p>
                    </div>
                    <div class="w-1/12 p-2 flex justify-end px-3">
                        <span>${order.id}</span>
                    </div>
                    <div class="w-1/12 p-2 flex justify-end">
                        <input type="checkbox" checked="checked" class="checkbox checkbox-md checkbox-neutral"/>
                    </div>
                    <div class="panel z-10 hidden w-full flex justify-between bg-white">
                        <div class="w-full border flex flex-wrap official-class rounded-[5px] bg-white transition ease-in-out">
                            <div class="w-1/12 p-2 flex row gap-5">
                                <input type="checkbox" id=${"checkbox2-"+order.Id} class="accordion-checkbox hidden"
                                       onclick=${rotateButton(this)}>
                                <label for=${"checkbox2-"+order.Id} class="accordion btn btn-sm btn-ghost">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </label>
                   
                   
                                <div class="dropdown dropdown-bottom">
                                    <div tabindex="0" role="button" class="btn btn-sm btn-ghost">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </div>
                                    <ul tabindex="0"
                                        class="dropdown-content z-[1111] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-6/12 p-2 flex justify-end">
                                <p class="text-right rtl">
                                    <span>:کد مشتری</span>
                                    <br>
                                    <span>${order.customerCode}</span>
                                </p>
                            </div>
                            <div class="w-3/12 p-2 flex justify-end">
                                <p class="text-right rtl">
                                    <span>:نام مشتری</span>
                                    <br>
                                    <span>${order.customerName}</span>
                                </p>
                            </div>
                   
                            <div class="w-1/12 p-2 flex justify-end">@order.Id</div>
                            <div class="w-1/12 p-2 flex justify-end">
                                <input type="checkbox" checked="checked"
                                       class="checkbox checkbox-md checkbox-neutral"/>
                            </div>
                   
                            <div class="panel divide-y divide-solid hidden">
                                <div class="z-10 w-full flex justify-between bg-white">
                   
                                    <div class="w-1/12 p-2 flex justify-end items-center">
                   
                   
                                        <div class="dropdown dropdown-bottom">
                                            <div tabindex="0" role="button" class="btn btn-sm btn-ghost">
                                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                            </div>
                                            <ul tabindex="0"
                                                class="dropdown-content z-[1111] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li class="text-right">
                                                    <a href="#">جزئیات سفارش</a>
                                                </li>
                                                                    <li class="text-right">
                                                                        <a href="#">تغییر وضعیت سفارش</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-9/12 p-2 flex justify-end">
                                        <div dir="rtl" class="w-3/12 p-2 flex flex-wrap gap-[16px] p-[16px]">
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>نوع وصول:</span>
                                                    <br>
                                                    <span>${order.collectionTypeString}</span>
                                                </p>
                                            </div>
                                            <div class='w-full py-[2px]'>
                   
                                                <p class="text-right rtl">
                                                    <span>وضعیت سفارش:</span>
                                                    <br>
                                                    <span>${order.orderStatusString}</span>
                                                </p>
                                            </div>
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>جمع کل:</span>
                                                    <br>
                                                    <span class="separator3">${order.sum}</span>ريال
                                                </p>
                                            </div>
                   
                                        </div>
                                        <div dir="rtl" class="w-3/12 p-2 flex flex-wrap gap-[16px] p-[16px]">
                                            <div class='w-full py-[2px]'>
                   
                                                <p class="text-right rtl">
                                                    <span>درجه مشتری:</span>
                                                    <br>
                                                    <span>${order.customerDegree}</span>
                                                </p>
                                            </div>
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    &nbsp;
                                                </p>
                                            </div>
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>مبلغ تخفیف:</span>
                                                    <br>
                                                    <span class="separator3">${order.discount}</span>ريال
                                                </p>
                                            </div>
                   
                                        </div>
                                        <div dir="rtl" class="w-3/12 p-2 flex flex-wrap gap-[16px] p-[16px]">
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>نام تابلو:</span>
                                                    <br>
                                                    <span>${order.shopName}</span>
                                                </p>
                                            </div>
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>شماره فاکتور:</span>
                                                    <br>
                                                    <span>
                                                        ${(order.factorId != null ? order.factorId : order.orderId)}
                                                    </span>
                                                </p>
                                            </div>
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>مبلغ ناخالص:</span>
                                                    <br>
                                                    <span class="separator3">${order.grossAmount}</span>ريال
                                                </p>
                                            </div>
                   
                                        </div>
                                        <div dir="rtl" class="w-3/12 p-2 flex flex-wrap gap-[16px] p-[16px]">
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>صنف-فعالیت:</span>
                                                    <br>
                                                    <span>${order.activityName}</span>
                                                </p>
                                            </div>
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>تاریخ فاکتور:</span>
                                                    <br>
                                                    <span dir="ltr">
                                                        ${(order.factorDate != null ? order.factorDate : order.orderDate)}
                                                    </span>
                                                </p>
                                            </div>
                                            <div class='w-full py-[2px]'>
                                                <p class="text-right rtl">
                                                    <span>مبلغ ارزش افزوده:</span>
                                                    <br>
                                                    <span class="separator3 font-bold">${order.totalAmount}</span>ريال
                                                </p>
                                            </div>
                   
                                        </div>
                                    </div>
                                    <div class="w-1/12 p-2 flex justify-end items-center">${order.id}</div>
                                    <div class="w-1/12 p-2 flex justify-end items-center">
                                        <input type="checkbox" checked="checked"
                                               class="checkbox checkbox-md checkbox-neutral"/>
                                    </div>
                                </div>
                   
                   
                            </div>
                   
                        </div>
                    </div>
                    </div>
       
                    `;
                    table.appendChild(row);
                });



                // Update pagination
                updatePagination(pageNumber, Math.ceil(data.totalCount / itemsPerPage));
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function updatePagination(currentPage, totalPages) {
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.innerText = i;
            li.addEventListener('click', () => fetchData(i));
            if (i === currentPage) {
                li.classList.add('active');
            }

            paginationContainer.appendChild(li);
        }
    }

    // Initial data fetch
    fetchData(currentPage);
});


let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.parentElement.parentElement.lastElementChild;
        if (panel.classList.contains("hidden")) {
            panel.classList.remove("hidden");
        } else {
            panel.classList.add("hidden");
        }
    });
}


function rotateButton(checkbox) {
    let icon = checkbox.nextElementSibling.querySelector('.fa-solid.fa-chevron-down');

    // Toggle the 'rotate-180' class on the checkbox label
    checkbox.classList.toggle('rotate-0');

    // Toggle the 'rotate-180' class on the icon
    icon.classList.toggle('rotate-180');

    // Find the two-level parent using the official class
    let twoLevelParent = checkbox.closest('.official-class');

    if (twoLevelParent) {
        if (checkbox.checked) {
            twoLevelParent.classList.replace('bg-white', 'bg-neutral-100');
        } else {
            twoLevelParent.classList.replace('bg-neutral-100', 'bg-white');
        }
    }

    console.log(checkbox.checked ? checkbox.id + ' is checked' : checkbox.id + ' is unchecked');
}
