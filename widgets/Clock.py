import sqlite3

from core.base.model.Widget import Widget
from core.base.model.WidgetSizes import WidgetSizes


class Clock(Widget):

	DEFAULT_SIZE = WidgetSizes.w_small
	DEFAULT_OPTIONS: dict = dict()

	def __init__(self, data: sqlite3.Row):
		super().__init__(data)
